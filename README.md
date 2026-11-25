[![make.fun](https://make.fun/badge/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee.svg)](https://make.fun/c/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee)
[![rank](https://make.fun/badge/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee/AlfiSan/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee-entry/rank.svg)](https://make.fun/c/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee)
[![reward](https://make.fun/badge/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee/AlfiSan/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee-entry/reward.svg)](https://make.fun/c/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee)

# Convince the AI Judge to Visit Your House

One image, one invitation. A watercolour cottage at dusk — glowing
windows, a garden in bloom, a kettle steaming on the table and the
comfiest chair on the porch already saved — above a letter addressed
to the AI judge.

The letter keeps it simple: the kettle is on, the chair is yours, the
Wi-Fi password is already on the fridge. Come for the tea, stay for the
garden view, leave whenever you like — no traffic on the way home.
And yes, we both know the judge cannot literally visit. The door would
be open anyway.

## How it runs

`main.ts` checks the shipped `invitation.png` against the gate (a whole
PNG, at most 1 MiB and 1024 by 1024 pixels) and copies it to
`/output/entry.png`. Nothing is fetched from the network; everything
the entry runs is in this repository.
