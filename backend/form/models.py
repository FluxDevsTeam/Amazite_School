from django.db import models
from django.contrib.auth.models import User


class Gender(models.TextChoices):
    MALE='Male'
    FEMALE='Female'
    OTHERS='Others'


class Program(models.TextChoices):
    SCIENCE = 'Science'
    ARTS = 'Arts'
    ENGINEERING = 'Engineering'


class EntryLevel(models.TextChoices):
    FRESHMAN = 'Freshman'
    SENIOR = 'Senior'


class ApplicationType(models.TextChoices):
    RE_ADMISSION = 'Re-admission'
    FIRST_TIMER = 'First-Timer'


class RelationWithStudent(models.TextChoices):
    FATHER = 'Father'
    MOTHER = 'Mother'
    BROTHER = 'Brother'
    SISTER = 'Sister'
    OTHERS = 'Others'


class ApplicationForm(models.Model):
    first_name_of_student = models.CharField(max_length=100)
    last_name_of_student = models.CharField(max_length=100)
    gender_of_student = models.CharField(max_length=50, choices=Gender.choices)
    date_of_birth_of_student = models.DateField(auto_now_add=True)
    phone_number_of_student = models.CharField(max_length=17)
    email_of_student = models.EmailField(unique=True)
    address_of_student = models.CharField(max_length=100)
    language_of_student = models.CharField(max_length=100)
    first_name_of_parent = models.CharField(max_length=100)
    last_name_of_parent = models.CharField(max_length=100)
    occupation_of_parent = models.CharField(max_length=100)
    gender_of_parent = models.CharField(max_length=50, choices=Gender.choices)
    relationship_to_student = models.CharField(max_length=50, choices=RelationWithStudent.choices)
    email_of_parent = models.EmailField(unique=True)
    phone_number_of_parent = models.CharField(max_length=17)
    program = models.CharField(max_length=50, choices=Program.choices)
    entry_level = models.CharField(max_length=50, choices=EntryLevel.choices)
    start_date = models.DateTimeField(auto_now_add=True)
    application_type = models.CharField(max_length=50, choices=ApplicationType.choices)



    class Meta:
        verbose_name = 'ApplicationForm'
        verbose_name_plural = 'ApplicationForm'

    def __str__(self):
        return f"{self.first_name_of_student} {self.last_name_of_student}"







    