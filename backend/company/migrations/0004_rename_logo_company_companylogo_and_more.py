# Generated by Django 4.2.1 on 2023-06-19 13:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('company', '0003_alter_company_logo'),
    ]

    operations = [
        migrations.RenameField(
            model_name='company',
            old_name='logo',
            new_name='companyLogo',
        ),
        migrations.RenameField(
            model_name='company',
            old_name='name',
            new_name='companyName',
        ),
    ]