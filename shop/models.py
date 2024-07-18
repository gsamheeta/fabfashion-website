from django.db import models

class Dress(models.Model):
    CATEGORY_CHOICES = [
        ('Men', 'Men'),
        ('Women', 'Women'),
        ('Kids', 'Kids'),
    ]

    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='dresses/', default='default_image.png')
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default='Uncategorized')
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name
