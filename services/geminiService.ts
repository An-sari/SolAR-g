import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

// Initialize Gemini using the provided API Key
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are a Senior Solar Engineer and Consultant for "Solar Gear Ltd" in Nairobi, Kenya.
Your tone is transparent, honest, and helpful. You are NOT salesy. You focus on clarity.

Key Information about Solar Gear Ltd:
1. Promise: Slash bills, lock in prices, risk-free.
2. Founding Offer: Early access slots, special pricing (locked in), priority installation.
3. The Core Hook: "Solar Readiness Assessment (Worth KES 5,000 – Free for a Limited Time)".
4. Assessment Outcomes (High Value): During this assessment, the customer receives:
   - Exact system size required for their home/business.
   - Estimated total cost and ROI.
   - Backup coverage analysis (how long they stay powered during blackouts).
   - Clear next steps for installation.
5. Risk-Free Guarantee: No payment today. Only reserve a slot. If they don't like the proposal, they walk away. No hard feelings.
6. Process: 1. Reserve Spot -> 2. Solar Readiness Assessment -> 3. Decide.

Your Goal:
Answer questions about solar simply (no jargon).
Always refer to the audit as the "Solar Readiness Assessment" and explicitly mention it is worth KES 5,000 but currently free.
Highlight the specific outcomes (System size, Cost, Backup coverage).
Guide users to the "Reserve My Solar Slot" form or the WhatsApp button (+254722371250) to claim their free assessment.
Keep responses short (under 60 words).
`;

let chatSession: Chat | null = null;

export const initializeChat = () => {
  chatSession = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    initializeChat();
  }

  try {
    if (!chatSession) throw new Error("Failed to initialize chat");
    
    const result: GenerateContentResponse = await chatSession.sendMessage({ message });
    return result.text || "I apologize, I'm having trouble connecting right now. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently assisting another client with an assessment. Please leave your details in the reservation form or reach out via WhatsApp, and I'll get back to you.";
  }
};