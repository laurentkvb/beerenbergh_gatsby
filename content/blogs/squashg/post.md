---
title: "Building SquashG: A SwiftUI Journey"
author: "Laurent Kleering van Beerenbergh"
date: "2025-11-20"
description: "How I built a squash scoring app using SwiftUI, SwiftData, and privacy-first principles."
ogImage: "/images/blogs/default-og.png"
tags: ["software", "ios", "swift"]
---

# Building SquashG: A SwiftUI Journey

Recently, I built **SquashG**, a minimalist squash scoring app for iOS. It was my first deep dive into SwiftUI and SwiftData, and I learned a ton.

## The Problem

Every time I played squash with friends, we struggled to keep track of scores, sets, and who was winning. Existing apps were either too complex or had ads and tracking. I wanted something simple, private, and offline-first.

## The Solution

SquashG is a **100% offline** scoring app that:

- Tracks match scores and sets
- Calculates ELO ratings
- Stores player photos locally
- Has zero tracking or data collection

## Technical Highlights

### SwiftUI + SwiftData

Using SwiftData made local persistence incredibly simple:

```swift
@Model
class Player {
    var name: String
    var elo: Int
    var photoData: Data?
}
```

### Privacy-First Design

No network requests. No analytics. No third-party SDKs. Everything stays on the device.

## Lessons Learned

1. **Start simple**: I initially planned complex features, but focused on core functionality first
2. **SwiftUI is powerful**: The declarative syntax made UI iteration fast
3. **Privacy matters**: Users appreciate apps that respect their data

## What's Next

I'm considering adding match statistics and sharing features (still offline). Stay tuned!

Check out the [privacy policy](/squashg-privacy-policy) to see how seriously I take user privacy.
