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
                                    "$ref": "#/components/schemas/GetBookmarkListResponseBody"
                                }
                            }
                        }
                    },
                    "400": {
                        "$ref": "#/components/responses/RequestError"
                    },
                    "500": {
                        "$ref": "#/components/responses/ServerError"
                    }
                }
            },
            "post": {
                "tags": [
                    "Bookmark"
                ],
                "summary": "Create a Bookmark",
                "description": "Create a Bookmark from a link",
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/PostBookmarkRequestBody"
                            }
                        }
                    }
                },
                "responses": {
                    "201": {
                        "description": "The newly created Bookmark",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/PostBookmarkResponseBody"
                                }
                            }
                        }
                    },
                    "500": {
                        "$ref": "#/components/responses/ServerError"
                    }
                }
            }
        },
        "/bookmarks/{bookmarkId}": {
            "get": {
                "tags": [
                    "Bookmark"
                ],
                "summary": "Get a Bookmark by id",
                "description": "Retrieve a Bookmark by its id",
                "parameters": [
                    {
                        "$ref": "#/components/parameters/bookmarkId"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "The requested Bookmark",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/PostBookmarkResponseBody"
                                }
                            }
                        }
                    },
                    "404": {
                        "$ref": "#/components/responses/ResourceNotFound"
                    },
                    "500": {
                        "$ref": "#/components/responses/ServerError"
                    }
                }
            },
            "delete": {
                "tags": [
                    "Bookmark"
                ],
                "summary": "Delete a Bookmark",
                "description": "Deletes Bookmark from collection",
                "parameters": [
                    {
                        "$ref": "#/components/parameters/bookmarkId"
                    }
                ],
                "responses": {
                    "204": {
                        "$ref": "#/components/responses/SuccessNoContent"
                    },
                    "404": {
                        "$ref": "#/components/responses/ResourceNotFound"
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
            },
            "SuccessNoContent": {
                "description": "Success, no content returned"
            }
        },
        "schemas": {
            "creationDate": {
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
            "duration": {
                "type": "number | null",
                "example": 60
            },
            "height": {
                "type": "number",
                "example": 400
            },
            "id": {
                "type": "number",
                "example": 1
            },
            "message": {
                "type": "string",
                "example": "Ressource not found"
            },
            "tagEndPoint": {
                "type": "string",
                "example": "/v1/tags/1"
            },
            "tagEndPointList": {
                "type": "array",
                "items": {
                    "$ref": "#/components/schemas/tagEndPoint"
                }
            },
            "tagName": {
                "type": "string",
                "example": "startup"
            },
            "title": {
                "type": "string",
                "example": "Klaxoon en 1 minute"
            },
            "type": {
                "type": "string",
                "example": "video"
            },
            "url": {
                "type": "string",
                "example": "https://vimeo.com/223469420"
            },
            "width": {
                "type": "number",
                "example": 600
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
                    "authorName": {
                        "$ref": "#/components/schemas/authorName"
                    },
                    "creationDate": {
                        "$ref": "#/components/schemas/creationDate"
                    },
                    "duration": {
                        "$ref": "#/components/schemas/duration"
                    },
                    "height": {
                        "$ref": "#/components/schemas/height"
                    },
                    "id": {
                        "$ref": "#/components/schemas/id"
                    },
                    "tagEndPointList": {
                        "$ref": "#/components/schemas/tagEndPointList"
                    },
                    "title": {
                        "$ref": "#/components/schemas/title"
                    },
                    "type": {
                        "$ref": "#/components/schemas/type"
                    },
                    "url": {
                        "$ref": "#/components/schemas/url"
                    },
                    "width": {
                        "$ref": "#/components/schemas/width"
                    }
                }
            },
            "BookmarkList": {
                "type": "array",
                "items": {
                    "$ref": "#/components/schemas/Bookmark"
                }
            },
            "Tag": {
                "type": "object",
                "properties": {
                    "id": {
                        "$ref": "#/components/schemas/id"
                    },
                    "name": {
                        "$ref": "#/components/schemas/tagName"
                    }
                }
            },
            "GetBookmarkListResponseBody": {
                "type": "object",
                "properties": {
                    "bookmarkList": {
                        "$ref": "#/components/schemas/BookmarkList"
                    }
                }
            },
            "PostBookmarkResponseBody": {
                "type": "object",
                "properties": {
                    "bookmark": {
                        "$ref": "#/components/schemas/Bookmark"
                    }
                }
            },
            "PostBookmarkRequestBody": {
                "type": "object",
                "properties": {
                    "url": {
                        "$ref": "#/components/schemas/url"
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