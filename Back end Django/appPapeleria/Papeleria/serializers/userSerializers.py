from rest_framework import serializers
from ..models.user import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'name', 'email']

    def create(self, validated_data):
        return User.objects.create(**validated_data)

    def to_representation(self, instance):
        return {
            'id': instance.id,
            'username': instance.username,
            'name': instance.name,
            'email': instance.email,
        }


    
