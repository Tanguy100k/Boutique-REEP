import { Router } from "express";
import Stripe from "stripe";

const router = Router();

export default function verifyPayment(stripe: Stripe) {

    router.get("/verify-payment/:sessionId", async (req, res) => {
        const sessionId = req.params.sessionId;

        try {
            const session = await stripe.checkout.sessions.retrieve(sessionId);
            if (session.payment_status === "paid") {
                return res.json({ paid: true });
            } else {
                return res.json({ paid: false });
            }
        } catch (err) {
            console.error('Err: Aucune session trouvée');
            return res.json({ paid: false });
        }
    });
    return router;
}