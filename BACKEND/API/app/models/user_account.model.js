module.exports = mongoose => {
    const user_account = mongoose.model(
        "user_account",
        mongoose.Schema({
            email: String,
            username: String,
            password: String,
            created_time: Date,
        },
        { timestamps: true })
    );
  
    return user_account;
};