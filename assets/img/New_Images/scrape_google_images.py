import os
import requests
from bs4 import BeautifulSoup
import urllib.parse

def crawl_site_images():
    base_url = "http://drkarpe.com/"
    pages = [
        "",
        "about.html",
        "service.html",
        "gallery.html",
        "technology.html"
    ]
    
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36"
    }
    
    output_dir = r"C:\Users\rajat\OneDrive\Documents\Antigravity\Dr. Karpe 3\assets\img\Google_Business_Images"
    os.makedirs(output_dir, exist_ok=True)
    
    downloaded_urls = set()
    count = 0
    
    for page in pages:
        page_url = urllib.parse.urljoin(base_url, page)
        print(f"Crawling page: {page_url}...")
        try:
            response = requests.get(page_url, headers=headers, timeout=15)
            if response.status_code != 200:
                print(f"Skipping {page_url} (Status: {response.status_code})")
                continue
                
            soup = BeautifulSoup(response.text, 'html.parser')
            img_tags = soup.find_all('img')
            print(f"Found {len(img_tags)} img tags on {page_url}")
            
            for img in img_tags:
                src = img.get('src')
                if not src:
                    continue
                full_img_url = urllib.parse.urljoin(page_url, src)
                if full_img_url in downloaded_urls:
                    continue
                
                filename_lower = os.path.basename(full_img_url).lower()
                # Filter out standard UI icons and buttons
                if any(x in filename_lower for x in ['logo', 'icon', 'arrow', 'star', 'loader', 'quote', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'whatsapp']):
                    continue
                if any(x in full_img_url.lower() for x in ['slicknav', 'favicon']):
                    continue
                    
                downloaded_urls.add(full_img_url)
                
                print(f"Downloading: {full_img_url}")
                try:
                    img_res = requests.get(full_img_url, headers=headers, timeout=10)
                    if img_res.status_code == 200:
                        basename = os.path.basename(full_img_url)
                        basename = basename.split('?')[0]
                        if not basename:
                            basename = f"image_{count+1}.jpg"
                        filepath = os.path.join(output_dir, basename)
                        with open(filepath, 'wb') as f:
                            f.write(img_res.content)
                        print(f"Saved: {basename}")
                        count += 1
                        if count >= 35:
                            break
                except Exception as e:
                    print(f"Error downloading {full_img_url}: {e}")
            if count >= 35:
                break
        except Exception as e:
            print(f"Error crawling {page_url}: {e}")
            
    print(f"\nCrawling complete! Downloaded {count} clinic images to '{output_dir}'.")

if __name__ == "__main__":
    crawl_site_images()
