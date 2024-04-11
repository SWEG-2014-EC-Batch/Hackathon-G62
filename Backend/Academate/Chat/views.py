






from rest_framework.views import APIView
from rest_framework.response import Response

from rest_framework import status
from rest_framework.generics import ListAPIView
from rest_framework.pagination import LimitOffsetPagination
from Chat.models import ChatRoom, ChatMessage
from Chat.serializers import ChatRoomSerializer,ChatMessageSerializer


# Create your views here.
class ChatRoomView(APIView):
    def get(self,request,userId):
        chatRooms = ChatRoom.objects.filter(member=userId)
        serializer = ChatRoomSerializer(chatRooms,many=True,context={'request': request})
        return Response(serializer.data,status=status.HTTP_200_OK)
    
    def post(self,request):
        
        serializer = ChatRoomSerializer(
            data = request.data,context ={'request': request}
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
class MessagesView(ListAPIView):
    serializer_class = ChatMessageSerializer
    pagination_class = LimitOffsetPagination
    def get_queryset(self):
        roomId = self.kwargs['roomId']
        return ChatMessage.objects.filter(chat__room=roomId).order_by('-timestamp')
    
