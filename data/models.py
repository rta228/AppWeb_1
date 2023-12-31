from django.db import models

class Data(models.Model):
    data = models.CharField("Data", max_length=240)
    data2 = models.CharField("Data2", max_length=240)
    email = models.EmailField("Email", max_length=240)

    def __str__(self):
        return self.data, self.data2, self.email