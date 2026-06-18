The signature DayMaker component — a Go / Caution / Avoid verdict with a plain-English summary. Use it at the top of any forecast or spot view.

```jsx
<Recommendation
  verdict="caution"
  window="Today · departs 7:00a"
  title="Marginal early, easing by noon"
  summary="2–3 ft at 5s with 15 kt SE. Doable in a 25-footer; choppy for smaller skiffs. Better window after 12p."
/>
<Recommendation verdict="go" variant="pill" />
```

`verdict`: go | caution | avoid. `variant`: card | pill.
