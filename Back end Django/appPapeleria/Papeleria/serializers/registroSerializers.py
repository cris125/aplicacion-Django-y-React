from ..models.registros import Registros
from rest_framework import serializers

class RegistroSerializers(serializers.ModelSerializer):
   class Meta:
       """//PUEDE QUE ESTE MAL photo = serializers.ImageField(max_length=None, use_url=True)"""
       model = Registros
       fields = ['id', 'dateTime', 'name','value','existences','description', 'photo', 'user'] 

def to_representation(self, instance):
        representation = {
            'id': instance.id,
            'dateTime': instance.dateTime,
            'value':instance.value,
            'existences':instance.existences,
            'name': instance.name,
            'description': instance.description,
            'user': instance.user_id,
        }

        if instance.photo:
            representation['photo'] = instance.photo.url
        else:
            representation['photo'] = None

        return representation