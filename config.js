// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    valentineName: "Arifah",

    // The title that appears in the browser tab
    pageTitle: "Arifah, You Stole My Heart 💖",

    // Floating emojis that appear in the background
    floatingEmojis: {
        hearts: ['❤️', '🧡', '💖', '💗', '💓'],  
        cozy: ['☕', '🔥', '🧸', '🎶']         
    },

    // Questions and answers
    questions: {
        first: {
            text: "Do you like me, or are you just here for the snacks?",
            yesBtn: "Of course, I do! ❤️",
            noBtn: "No, I'm here for the food 🍕",
            secretAnswer: "I don’t just like you... I’m completely obsessed with you. 😍"
        },
        second: {
            text: "How much do you love me?",
            startText: "This much and more!",
            nextBtn: "Next 💕"
        },
        third: {
            text: "Will you be my Valentine, my forever cuddle partner? 🧸💖",
            yesBtn: "A million times YES! 💘",
            noBtn: "Let me think... JK! Of course! 😆"
        }
    },

    // Love meter messages
    loveMessages: {
        extreme: "You love me more than WiFi and snacks? I'M SHOOK! 😍🚀",
        high: "You're basically my soulmate, no take-backs! 💘",
        normal: "More than words can say… but let’s add some chocolate too. 🍫"
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "OH YESSS! I’m the happiest person ALIVE! 🎉💝",
        message: "Now come collect your prize: unlimited hugs, forehead kisses, and me being annoying forever. 🥰",
        emojis: "🎁💖🤗💝💋🔥☕"
    },

    // Color scheme for a warm, cozy vibe
    colors: {
        backgroundStart: "#ff9a8b",
        backgroundEnd: "#ff6a88",
        buttonBackground: "#ff3e57",
        buttonHover: "#ff5f7c",
        textColor: "#8b0000"
    },

    // Animation settings
    animations: {
        floatDuration: "12s",
        floatDistance: "60px",
        bounceSpeed: "0.6s",
        heartExplosionSize: 1.7
    },

    // Background Music
    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/get_you.mp3", 
        startText: "🎵 Play Our Song",
        stopText: "🔇 Stop Music",
        volume: 0.6
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG;
