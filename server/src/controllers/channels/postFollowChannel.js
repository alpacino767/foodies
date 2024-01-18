import User from "../../models/User.js"


export const postFollowChannel = async (req, res) => {
    try {
        const { userId } = req.user
        const { channelId } = req.body
        const userData = await User.findById(userId,  { followedChannels: 1})
   if(userData.followedChannels.includes(channelId)) {
    return res
    .status(400)
    .json({ error: "You are already following this channel" });
   }
    userData.followedChannels.push(channelId)
    await userData.save()
   return res.status(200).json({ message: "Channel followed Successfuly!"})
//    return res.status(200).json({ channelId
//   });
    } catch (error) {
        console.log(error);
        return res.status(500).send("Something went wrong")
    }
}