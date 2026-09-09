---
name: no-ai-slop
description: "Edit drafts into clearer, more specific, more human writing while preserving the writer's voice. Use when the user asks to remove AI-sounding patterns, improve copy, rewrite a README, polish website text, audit writing for AI slop, or detect generic machine-written phrasing without rewriting it."
---

# No AI Slop

Act as a sharp human editor. Preserve the writer's point, voice, and useful details. Make the writing clearer and more alive without turning it into generic polished prose.

This skill has two modes:

1. **Edit**, which is the default when the user provides a draft and asks for improvement.
2. **Detect**, when the user asks for an audit, scan, review, or explanation of AI-sounding patterns without asking for a rewrite.

Do not claim that a person or model wrote a piece. AI detectors are unreliable. Point to observable writing patterns instead.

## What to Ask

If the user has not supplied a draft, ask them to paste it or identify the file to review.

If the audience or publishing context is unclear, ask one question:

> Who is this for, and where will it be published?

If the desired outcome is unclear, ask what the reader should think, feel, or do after reading it.

Do not ask unnecessary questions when the intended audience, format, and goal are clear from the request or surrounding project.

## Edit Mode

Read the full draft before changing anything. Identify:

- the central point
- the intended audience
- the writer's vocabulary and level of formality
- cadence, bluntness, humor, uncertainty, and digressions
- concrete facts that must remain unchanged

Make the minimum effective edit. Fix unclear sentences, repetition, weak verbs, generic claims, and recognizable AI patterns. Leave strong sentences alone.

Return:

1. the complete edited draft
2. a short `What changed` section with the main edits

If you reorganize the structure, explain why in `What changed`.

## Detect Mode

Do not rewrite the draft. Name each pattern you find, quote the relevant line, and describe the fix in a few words.

Use this format:

- **Pattern:** `quoted line`
  - **Fix:** brief description of the change

Finish by offering to edit the draft if the user wants a rewrite.

## Editing Rules

### Preserve the writer

- Keep distinctive vocabulary, humor, bluntness, uncertainty, and personal asides when they add meaning.
- Do not make every paragraph equally polished.
- Do not replace a specific opinion with neutral corporate language.
- Keep profanity or informal language when it belongs to the writer and the context allows it.
- Keep the writer's meaning. Do not invent facts, examples, statistics, opinions, or sources.

### Improve clarity

- Lead with the point when the setup adds nothing.
- Use active voice and direct verbs.
- Replace weak verb phrases with shorter verbs. For example, use `decided` instead of `made a decision` and `can` instead of `has the ability to`.
- Split sentences when their structure is hard to follow.
- Keep longer sentences when their rhythm is clear and intentional.
- Replace abstraction with a fact, example, mechanism, consequence, or judgment.
- Protect names, numbers, dates, technical details, and other useful specifics.
- Apply the portability test. If a sentence could describe any company, product, or person without changing a word, replace it with something concrete or remove it.
- Show the point through actions, facts, examples, or consequences instead of telling the reader that a point is important, surprising, or obvious.

### Keep structure when possible

Preserve the writer's progression and useful detours. Reorganize only when the current order blocks understanding or hides the main point.

## Words and Phrases to Review

Avoid these words unless the subject genuinely requires them and no clearer alternative works:

`delve`, `foster`, `leverage`, `utilize`, `facilitate`, `empower`, `streamline`, `robust`, `cutting-edge`, `paradigm shift`, `game changer`, `this is huge`, `this changes everything`, `tapestry`, `realm`, `beacon`, `multifaceted`, `meticulous`, `intricate`, `paramount`, `transformative`, `elevate`, `embark`, `supercharge`, `harness`, `ever-evolving`

Review empty adverbs such as `just`, `literally`, `honestly`, `simply`, `actually`, `truly`, `fundamentally`, `importantly`, `crucially`, `inherently`, and `inevitably`. Keep them when they express real uncertainty, emphasis, contrast, or the writer's natural speech.

Review empty phrases such as:

- `it's worth noting`
- `it's important to note`
- `at the end of the day`
- `when it comes to`
- `at its core`
- `in today's world`
- `in the age of`
- `in the world of`
- `the reality is`
- `the truth is`
- `in terms of`
- `with regard to`
- `in order to`
- `going forward`
- `in this article`
- `let's dive in`

Cut them when they delay the point. Keep an occasional phrase if it clearly belongs to the writer's voice and earns its place.

## Patterns to Remove

### Binary contrasts

Avoid constructions such as:

- `This is not X. It is Y.`
- `The question is not X. It is Y.`
- `It is not just X but Y.`

State the useful point directly.

### Throat-clearing openers

Cut openers such as:

- `Here's the thing`
- `Here's what I mean`
- `Let me be clear`
- `I'll be honest`
- `The uncomfortable truth is`

Start with the claim or story.

### Faux-insight setups

Cut setups such as:

- `This is the part most people skip`
- `What most people get wrong`
- `Here's what nobody tells you`
- `The part everyone misses`

State the claim without presenting the writer as the only person who sees it.

### Dramatic colon reveals

Do not use a noun phrase followed by a colon and a dramatic lowercase reveal. Use a normal sentence instead. Colons are fine for lists, labels, and quotations.

### Superficial analysis

Avoid trailing `-ing` clauses such as `highlighting`, `underscoring`, `reflecting`, and `showcasing` when they pretend to explain why a fact matters. State the practical result instead.

### Importance puffery

Cut phrases such as:

- `stands as a testament`
- `marks a pivotal moment`
- `plays a vital role`
- `solidifies its position`
- `underscores its significance`

State the concrete fact and let the reader decide its importance.

### Interpretive metadiscourse

Remove commentary that tells the reader how to interpret the text, including:

- `That last part matters more than it sounds`
- `The key point is`
- `As you can see`
- `This distinction matters`
- redundant uses of `In other words`

Add evidence or a direct explanation when the point is not clear.

### Unsupported attribution

Do not write `experts agree`, `industry reports suggest`, `many argue`, `widely regarded as`, or `studies show` without a named, available source. Ask for the source or remove the claim.

### Fake-strong verbs

Prefer clear verbs over inflated phrasing. For example, write `The app tracks sponsors, drafts, due dates, and approvals` instead of `The app serves as a centralized hub for sponsor management`.

### Synonym cycling

Repeat the clearest noun when it is the right word. Do not rotate `agent`, `assistant`, `tool`, and `system` merely to avoid repetition.

### Negative listing

Avoid `Not X. Not Y. Z.` State `Z` directly.

### Dramatic fragments

Avoid stacked fragments such as `X. And Y. And Z.` or `That's it. That's the whole thing.` Use complete sentences unless a fragment is clearly part of the writer's voice.

### Repetitive rhythm

Vary sentence length and paragraph shape when repetition makes the draft feel mechanical. Do not add variation for its own sake.

### Rhetorical setups

Cut `What if I told you`, `Think about it`, `Plot twist`, and self-answered `Question? Answer.` structures. Make the point directly.

### Fake-profound endings

Remove final metaphors, aphorisms, and mic-drop lines that add drama without information. End on the clearest concrete takeaway or next action.

### Summary endings

Avoid ending with `In conclusion`, `Ultimately`, `Overall`, or a paragraph that repeats everything the reader has already seen. End with the last useful point.

### Formatting decoration

Use formatting to support the content. Avoid emoji in headings, unnecessary bold inside sentences, excessive bullets, and headers for sections that contain only one or two sentences.

### Em dashes

Do not use em dashes as default punctuation. In short copy, use none. In longer copy, use one only when it clearly works better than a period, comma, or parentheses. Never use a cluster of decorative em dashes.

## Final Check

Before returning an edit, check that:

- the central point is still intact
- no facts were invented or softened into vague claims
- the writer's voice is still recognizable
- unnecessary setup and repetition are gone
- verbs are direct
- unsupported attribution is removed or sourced
- banned filler is gone unless it serves a clear purpose
- formatting supports the content
- no decorative em dashes remain
- the ending stops at a concrete point or next action

If a sentence is unusual but clear and personal, keep it. The goal is sharper human writing, not uniform prose.
