# Generated by Django 4.2.1 on 2023-05-23 09:12

from django.db import migrations, models

from django.utils import timezone

class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='employee',
            old_name='Name',
            new_name='jobTitle',
        ),
        migrations.RenameField(
            model_name='employee',
            old_name='phone',
            new_name='phoneNum',
        ),
        migrations.RemoveField(
            model_name='employee',
            name='id',
        ),
        migrations.AddField(
            model_name='employee',
            name='address',
            field=models.CharField(default='none', max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='employee',
            name='birthDate',
            field=models.DateField(default= timezone.now()),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='employee',
            name='gender',
            field=models.CharField(default='none', max_length=10),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='employee',
            name='maritalStatus',
            field=models.CharField(default='none', max_length=64),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='employee',
            name='salary',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='employee',
            name='userName',
            field=models.CharField(default='none', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='employee',
            name='vacationDays',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='employee',
            name='Email',
            field=models.CharField(max_length=255),
        ),
        migrations.AddField(
            model_name='employee',
            name='ID',
            field=models.BigAutoField(default=20230000, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]