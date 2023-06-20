from django.contrib.auth.models import AbstractUser
from django.db import models
from django.contrib.auth.models import PermissionsMixin
from .managers import CustomUserManager
import uuid


class Users(AbstractUser, PermissionsMixin):
    # these fields tie to the roles
    KIRAY_ADMIN = 1
    OWNER_OR_ADMIN = 2
    SELLS = 3

    ROLE_CHOICES = (
        (KIRAY_ADMIN, 'KIRAY_ADMIN'),
        (OWNER_OR_ADMIN, 'OWNER_OR_ADMIN'),
        (SELLS, 'SELLS')
    )
    username = None
    first_name = None
    last_name = None
    uid = models.UUIDField(unique=True, editable=False, default=uuid.uuid4(), verbose_name='Public identifier')
    full_name = models.CharField(max_length=50)
    phone = models.CharField(max_length=15, unique=True)
    role = models.PositiveSmallIntegerField(choices=ROLE_CHOICES, blank=True, null=True, default=2)
    USERNAME_FIELD = 'phone'
    REQUIRED_Fields = ('full_name')
    objects = CustomUserManager()

    def __str__(self):
        return self.phone

