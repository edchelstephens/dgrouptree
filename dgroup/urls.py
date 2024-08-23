from django.urls import path
from dgroup.views import dgroup

urlpatterns = [path("", dgroup.DgroupView.as_view(), name="index")]
