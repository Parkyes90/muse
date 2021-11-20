from rest_framework import pagination
from rest_framework.response import Response


class CorePagination(pagination.PageNumberPagination):
    def get_paginated_response(self, data):
        return Response(
            {
                "results": data,
                "total_pages": self.page.paginator.num_pages,
                "count": self.page.paginator.count,
                "next": self.get_next_link(),
                "previous": self.get_previous_link(),
            }
        )

    def get_paginated_response_schema(self, schema):
        custom_schema = super().get_paginated_response_schema(schema)
        custom_schema["properties"]["total_pages"] = {"type": "integer", "examples": "13"}
        return custom_schema
