import json
from django.urls import include, path, reverse
from rest_framework import status
from rest_framework.test import APITestCase, APIClient, URLPatternsTestCase

from .models import Users


class UserTest(APITestCase, URLPatternsTestCase):
    urlpatterns = [
        path('api/auth/', include('users.urls'))
    ]

    def setUp(self) -> None:
        self.user1 = Users.objects.create_user(
            phone='0913044626',
            password='pass'
        )

        self.admin = Users.objects.create_superuser(
            phone='0923434343',
            password='admintest'
        )

    def test_login(self):
        url = reverse('login')
        data = {
            'phone': '0923434343',
            'password': 'admintest'
        }

        response = self.client.post(url, data)
        response_data = json.loads(response.content)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response_data['success'], True)
        self.assertTrue('access' in response_data)

    def test_user_registration(self):
        url = reverse('register')
        data = {
            "phone": '0913044626',
            'password': 'pass'
        }
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)