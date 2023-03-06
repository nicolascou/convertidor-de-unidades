from django.db import models

class Unit(models.Model):
    symbol = models.CharField(max_length=10)
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.symbol

class Conversion(models.Model):
    input = models.DecimalField(max_digits=15, decimal_places=2)
    from_unit = models.ForeignKey(Unit, on_delete=models.CASCADE, related_name='input_conversion_set')
    output = models.DecimalField(max_digits=15, decimal_places=2)
    to_unit = models.ForeignKey(Unit, on_delete=models.CASCADE, related_name='output_conversion_set')

    def __str__(self):
        return f'{self.input} {self.from_unit} \u2192 {self.output} {self.to_unit}'