export const BASE_URL = "https://interviewprepai-backend-g6i0.onrender.com"; 

export const API_PATHS = { 
    AUTH: {
        REGISTER: "/api/auth/register", 
        LOGIN: "/api/auth/login", 
        GET_PROFILE: "/api/auth/profile", 
    },

    IMAGE: {
        UPLOAD_IMAGE: "/api/auth/upload-image", 
    }, 

    AI: { 
        GENERATE_QUESTIONS: "/api/ai/generate-questions", 
        GENERATE_EXPLANATION: "/api/ai/generate-explanation", 
    },


    SESSION: {
        CREATE: "/api/sessions/create", 
        GET_ALL: "/api/sessions/my-sessions", 
        GET_ONE: (id) => `/api/sessions/${id}`, 
        DELETE: (id) => `/api/sessions/${id}`, 
    }, 

    QUESTION: { 
        ADD_TO_SESSION: "/api/ai/questions/add",
        PIN: (id)=>`/api/ai/questions/${id}/pin`,
        UPDATE_NOTE: (id)=>`/api/ai/questions/${id}/note`, 
    },
}
