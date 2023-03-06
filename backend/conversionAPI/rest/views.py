from rest_framework.views import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import ConversionSerializer
from .models import Conversion, Unit

@api_view(['GET'])
def getConversions(request):
    conversions = Conversion.objects.all()
    serializer = ConversionSerializer(conversions, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def createConversion(request):
    data = request.data
    conversion = Conversion.objects.create(
        input = data['input'],
        from_unit = Unit.objects.get(symbol=data['from_unit']['symbol']),
        output = data['output'],
        to_unit = Unit.objects.get(symbol=data['to_unit']['symbol'])
    )
    serializer = ConversionSerializer(conversion, many=False)
    return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['DELETE'])
def deleteConversion(request, pk):
    conversion = Conversion.objects.get(id=pk)
    conversion.delete()
    return Response('Conversion removed', status=status.HTTP_204_NO_CONTENT)