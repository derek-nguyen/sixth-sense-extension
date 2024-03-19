from typing import Union, Dict
from fastapi import APIRouter
from app.services import summarization_service, scraper_service

router = APIRouter()

@router.get("/text")
async def scrape_website(url: str)-> Union[str,Dict[str,str]]:
    try:
        text_content = scraper_service.scrape_website_text_content(url)
        if text_content:
            return summarization_service.summarize_text_gpt4(text_content)
    except Exception as e:
        return {"error": str(e)}