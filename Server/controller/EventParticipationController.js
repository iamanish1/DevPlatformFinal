const EventParticipation = async(req,res) =>{
    try {
        
    } catch (error) {
        res.status(404).json({
            message: "Event Participation not found",
            error: error.message,
            statusCode: 404,
        })
    }
}