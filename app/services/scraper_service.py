import requests
from bs4 import BeautifulSoup
from pydantic import BaseModel, ValidationError
from urllib.parse import urljoin


class WebsiteContent(BaseModel):
    url: str


# Create a function that makes a request to a company website and extract the raw information
def scrape_website_text_content(url: str) -> str:
    try:
        website_content = WebsiteContent(url=url)
        response = requests.get(website_content.url)
        soup = BeautifulSoup(response.text, "html.parser")
        text_content = " ".join(text for text in soup.stripped_strings)
        return text_content
    except ValidationError as e:
        print(e.json())
        return None


def extract_website_links(url: str) -> list:
    try:
        website_content = WebsiteContent(url=url)
        response = requests.get(website_content.url)
        soup = BeautifulSoup(response.text, "html.parser")
        base_url = response.url
        links = [urljoin(base_url, link.get("href")) for link in soup.find_all("a")]
        return links
    except ValidationError as e:
        print(e.json())
        return None
