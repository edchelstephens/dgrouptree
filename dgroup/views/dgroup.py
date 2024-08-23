from django.views.generic import TemplateView


class DgroupView(TemplateView):
    """Dgroup view."""

    template_name = "dgroup/index.html"
