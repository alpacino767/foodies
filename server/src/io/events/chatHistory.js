import Channel from "../../models/Channel.js";
import Message from "../../models/Message.js"
export const emitChatHistory = async (socket, channelId) => {
  try {
    const channel = await Channel.findById(channelId).populate("messages");
    console.log('channel id chat',channelId);
    if (channel) {
      return socket.emit("chat-history", {
        channelId,
        messages: channel.messages.map((m) => ({
          author: m.author,
          content: m.content,
        })),
      });
    }
    socket.emit("chat-history", {
      errorOccured: true,
    });
  } catch (error) {
    console.log(error);
    socket.emit("chat-history", {
      errorOccured: true,
    });
  }
};

export const emitChatMessage = async (io, messageData) => {
  try {
    const channel = await Channel.findById(messageData.toChannel);
    if (channel) {
      const newMessage = new Message({
        content: messageData.message.content,
        author: messageData.message.author,
        date: new Date(),
      });
      await newMessage.save();
      channel.messages.push(newMessage._id);
      await channel.save();
      io.to(messageData.toChannel).emit('chat-message', newMessage)
    }
  } catch (error) {
    console.log(error);
  }
};
