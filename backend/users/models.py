from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext as _

from .managers import CustomUserManager


class Users(AbstractUser):
    username = None
    first_name = None
    last_name = None
    full_name = models.CharField(max_length=50)
    phone = models.CharField(max_length=15, unique=True)
    USERNAME_FIELD = 'phone'
    REQUIRED_FIELDS = ('full_name',)
    objects = CustomUserManager()

    def __str__(self):
        return self.email

