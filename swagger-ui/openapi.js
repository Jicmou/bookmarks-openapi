window.spec = 
{
    "openapi": "3.0.0",
    "info": {
        "title": "Bookmark Manager",
        "description": "Bookmark Manager for Flikr and Vimeo Links",
        "contact": {
            "name": "Jean-Christophe Maigrot",
            "url": "https://github.com/Jicmou",
            "email": "jc.maigrot@gmail.com"
        },
        "license": {
            "name": "All rights reserved",
            "url": "https://github.com/Jicmou"
        },
        "version": "1.0.0"
    },
    "servers": [
        {
            "url": "http://{environment}/{basePath}",
            "description": "MultiTenant environment to test on",
            "variables": {
                "environment": {
                    "enum": [
                        "localhost:8000"
                    ],
                    "default": "localhost:8000",
                    "description": "Available long-term environments where this specification is enforced"
                },
                "basePath": {
                    "default": "v1"
                }
            }
        }
    ],
    "paths": {
        "/bookmarks": {
            "get": {
                "tags": [
                    "Bookmark"
                ],
                "summary": "Get a Bookmark Collection",
                "description": "Retrieve a Collection of Bookmarks",
                "responses": {
                    "200": {
                        "description": "A Bookmark Collection",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/GetBookmarkListBody"
                                }
                            }
                        }
                    },
                    "500": {
                        "$ref": "#/components/responses/ServerError"
                    }
                }
            }
        }
    },
    "components": {
        "responses": {
            "ConflictError": {
                "description": "Conflict error",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/components/schemas/ConflictError"
                        }
                    }
                }
            },
            "RequestError": {
                "description": "Request error",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/components/schemas/RequestError"
                        }
                    }
                }
            },
            "ResourceNotFound": {
                "description": "Resource not found"
            },
            "ServerError": {
                "description": "Server error",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/components/schemas/ServerError"
                        }
                    }
                }
            }
        },
        "schemas": {
            "addedDate": {
                "type": "string",
                "example": "2017-06-28 11:19:07"
            },
            "authorName": {
                "type": "string",
                "example": "Klaxoon"
            },
            "code": {
                "type": "number",
                "example": 200
            },
            "id": {
                "type": "number",
                "example": 1
            },
            "message": {
                "type": "string",
                "example": "Ressource not found"
            },
            "title": {
                "type": "string",
                "example": "Klaxoon en 1 minute"
            },
            "url": {
                "type": "string",
                "example": "http://www.example.com/"
            },
            "ConflictError": {
                "type": "object",
                "properties": {
                    "code": {
                        "$ref": "#/components/schemas/code"
                    },
                    "message": {
                        "$ref": "#/components/schemas/message"
                    }
                }
            },
            "RequestError": {
                "type": "object",
                "properties": {
                    "code": {
                        "$ref": "#/components/schemas/code"
                    },
                    "message": {
                        "$ref": "#/components/schemas/message"
                    }
                }
            },
            "ServerError": {
                "type": "object",
                "properties": {
                    "code": {
                        "$ref": "#/components/schemas/code"
                    },
                    "message": {
                        "$ref": "#/components/schemas/message"
                    }
                }
            },
            "Bookmark": {
                "type": "object",
                "properties": {
                    "addedDate": {
                        "$ref": "#/components/schemas/addedDate"
                    },
                    "authorName": {
                        "$ref": "#/components/schemas/authorName"
                    },
                    "id": {
                        "$ref": "#/components/schemas/id"
                    },
                    "title": {
                        "$ref": "#/components/schemas/title"
                    },
                    "url": {
                        "$ref": "#/components/schemas/url"
                    }
                }
            },
            "BookmarkList": {
                "type": "array",
                "items": {
                    "$ref": "#/components/schemas/Bookmark"
                }
            },
            "GetBookmarkListBody": {
                "type": "object",
                "properties": {
                    "bookmarkList": {
                        "$ref": "#/components/schemas/BookmarkList"
                    }
                }
            }
        },
        "parameters": {
            "bookmarkId": {
                "name": "bookmarkId",
                "in": "path",
                "required": true,
                "description": "Bookmark ID",
                "schema": {
                    "$ref": "#/components/schemas/id"
                }
            }
        }
    }
}