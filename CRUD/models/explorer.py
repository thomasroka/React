from pydantic import BaseModel
 
 
class Explorer(BaseModel):
    name: str
    country: str
    description: str
 
 
class ExplorerUpdate(BaseModel):
    country: str
    description: str
