import { Router } from "express";
import Stripe from "stripe";

const router = Router();

export default function createCheckoutSession(stripe: Stripe) {

  router.post("/create-checkout-session", async (req, res) => {
    const start = Date.now();
    const { beatName, license, price } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: { name: `${beatName} - ${license} License` },
            unit_amount: price, // prix en cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:4200/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "http://localhost:4200",
    });
    console.log("Durée:", Date.now() - start, "ms");

    res.json({ url: session.url });
  });

  return router;

}

