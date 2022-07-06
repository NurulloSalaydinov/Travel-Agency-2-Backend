from modeltranslation.translator import register, TranslationOptions

from .models import City




@register(City)
class CityTranslationOptions(TranslationOptions):
    fields = ['title', 'description']
