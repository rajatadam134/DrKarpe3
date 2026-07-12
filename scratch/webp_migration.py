import os
import re
from PIL import Image

root_dir = r"c:\Users\rajat\OneDrive\Documents\Antigravity\Dr. Karpe 3"
img_dir = os.path.join(root_dir, "assets", "img")

# Exclusions
EXCLUDE_CONVERT = ["logo.png", "just_logo.png"]
EXCLUDE_DELETE = ["implant_section.jpeg", "logo.png", "just_logo.png"]

# Gather HTML and CSS files
html_files = [os.path.join(root_dir, f) for f in os.listdir(root_dir) if f.endswith(".html")]
css_files = [os.path.join(root_dir, "css", f) for f in os.listdir(os.path.join(root_dir, "css")) if f.endswith(".css")]

print(f"Analyzing {len(html_files)} HTML files and {len(css_files)} CSS files...")

# Build list of referenced image paths
referenced_paths = set()
for file_path in html_files + css_files:
    try:
        with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
            # Match assets/img/... references
            matches = re.findall(r'assets/img/[^\s"\'\)]+', content)
            for m in matches:
                # Clean delimiters
                m_clean = m.split('"')[0].split("'")[0].split(')')[0].split(';')[0]
                normalized = os.path.normpath(os.path.join(root_dir, m_clean)).lower()
                referenced_paths.add(normalized)
    except Exception as e:
        print(f"Error reading {file_path}: {e}")

print(f"Found {len(referenced_paths)} unique image references.")

# Convert in-use images to WebP
converted_mapping = {} # maps original_path -> webp_path
skipped_count = 0
unreferenced_count = 0

for dirpath, dirnames, filenames in os.walk(img_dir):
    for f in filenames:
        ext = os.path.splitext(f)[1].lower()
        if ext in (".png", ".jpg", ".jpeg"):
            full_path = os.path.join(dirpath, f)
            norm_path = full_path.lower()
            
            # Check exclusions
            base_name = f.lower()
            if base_name in EXCLUDE_CONVERT:
                skipped_count += 1
                continue
                
            # Check if referenced
            is_referenced = norm_path in referenced_paths
            # Backup check if relative path matches
            if not is_referenced:
                rel_path = os.path.relpath(full_path, root_dir).replace("\\", "/").lower()
                for ref in referenced_paths:
                    if rel_path in ref.replace("\\", "/"):
                        is_referenced = True
                        break
                        
            if not is_referenced:
                unreferenced_count += 1
                continue
                
            # Convert to webp
            webp_path = os.path.splitext(full_path)[0] + ".webp"
            try:
                im = Image.open(full_path)
                # Keep transparency for WebP if it has RGBA mode
                im.save(webp_path, "webp")
                converted_mapping[full_path] = webp_path
                print(f"Converted: {os.path.relpath(full_path, root_dir)} -> WebP")
            except Exception as e:
                print(f"Error converting {full_path}: {e}")

print(f"Successfully converted {len(converted_mapping)} images.")
print(f"Skipped conversions (logos/icons): {skipped_count}")
print(f"Skipped unreferenced images (untouched): {unreferenced_count}")

# Update references in HTML and CSS files
print("Updating code references...")
for file_path in html_files + css_files:
    try:
        with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
            
        modified = False
        for orig, webp in converted_mapping.items():
            # Get relative paths used in code
            rel_orig = os.path.relpath(orig, root_dir).replace("\\", "/")
            rel_webp = os.path.relpath(webp, root_dir).replace("\\", "/")
            
            # Check case-insensitive replace
            pattern = re.compile(re.escape(rel_orig), re.IGNORECASE)
            if pattern.search(content):
                content = pattern.sub(rel_webp, content)
                modified = True
                
        if modified:
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(content)
            print(f"Updated references in: {os.path.basename(file_path)}")
    except Exception as e:
        print(f"Error updating file {file_path}: {e}")

# Delete original files
print("Cleaning up original files...")
deleted_count = 0
for orig in converted_mapping.keys():
    base_name = os.path.basename(orig).lower()
    if base_name in EXCLUDE_DELETE:
        print(f"Preserved original: {os.path.basename(orig)}")
        continue
    try:
        os.remove(orig)
        print(f"Deleted original: {os.path.basename(orig)}")
        deleted_count += 1
    except Exception as e:
        print(f"Error deleting original {orig}: {e}")

# Perform clean up of the 8 already-converted duplicates
print("Cleaning up existing sibling duplicates...")
for dirpath, dirnames, filenames in os.walk(img_dir):
    for f in filenames:
        if f.lower().endswith(".webp"):
            base_path = os.path.splitext(os.path.join(dirpath, f))[0]
            # Check if there is an in-use original sibling
            for ext in (".png", ".jpg", ".jpeg"):
                orig_sibling = base_path + ext
                if os.path.exists(orig_sibling):
                    sibling_name = os.path.basename(orig_sibling).lower()
                    if sibling_name not in EXCLUDE_DELETE:
                        try:
                            os.remove(orig_sibling)
                            print(f"Deleted duplicate original sibling: {os.path.basename(orig_sibling)}")
                            deleted_count += 1
                        except Exception as e:
                            print(f"Error deleting sibling {orig_sibling}: {e}")

print(f"Cleanup complete. Deleted {deleted_count} files.")
