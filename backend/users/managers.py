from django.contrib.auth.base_user import BaseUserManager
from django.utils.translation import gettext as _


class CustomUserManager(BaseUserManager):

    def create_user(self, phone, password, **extra_fields):
        if not phone:
            raise ValueError(_('User must have an phone number'))
        user = self.model(phone=phone, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, phone, password, **extra_fields):
        extra_fields.setdefault('is_active', True)
        extra_fields.setdefault('role', 1)

        if extra_fields.get('role') != 1:
            raise ValueError(_('Superuser must have role of Kiray admin'))
        return self.create_user(phone, password, **extra_fields)