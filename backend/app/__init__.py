from fastapi import FastAPI

from .api.core.config import settings
from .api.middleware.cors import setup_cors
from .api.middleware.logging import setup_logging
from .api.modules.users import router as users_router
from .api.modules.items import router as items_router

app = FastAPI(title=settings.APP_NAME, version=settings.APP_VERSION)

setup_logging(app)
setup_cors(app)

app.include_router(users_router, prefix=f"{settings.API_PREFIX}/users", tags=["users"])
app.include_router(items_router, prefix=f"{settings.API_PREFIX}/items", tags=["items"])
