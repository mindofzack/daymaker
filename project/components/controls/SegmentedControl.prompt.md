Pill segmented control for mutually-exclusive views (Weather / Fishing / Map, Today / Hourly / 7-day).

```jsx
<SegmentedControl options={['Weather','Fishing','Map']} value={tab} onChange={setTab} />
```

Options can be strings or `{value,label,icon}`. Sizes `sm | md`.
