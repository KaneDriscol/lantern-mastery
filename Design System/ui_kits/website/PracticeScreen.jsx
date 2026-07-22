function PracticeScreen({ ds }) {
  const { PracticeTrackerCard, Button, Badge } = ds;
  const [logs, setLogs] = React.useState([
    { drillName: 'Oberhau drill', date: 'Jul 14, 2026', progress: 70, notes: 'Felt cleaner today.' },
    { drillName: 'Zwerchhau: bind recovery', date: 'Jul 11, 2026', progress: 45, notes: 'Still rushing the recovery step.' },
    { drillName: 'Footwork: passing step', date: 'Jul 8, 2026', progress: 90, notes: '' },
  ]);
  const addLog = () => setLogs([{ drillName: 'New drill', date: 'Today', progress: 10, notes: '' }, ...logs]);
  return (
    <div style={{padding:'48px 32px 96px'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}}>
        <h1 style={{fontFamily:'var(--font-serif-display)',fontSize:'var(--display-md-size)',letterSpacing:'var(--display-md-tracking)',color:'var(--ink)'}}>Practice Log</h1>
        <Button variant="primary" onClick={addLog}>Log a drill</Button>
      </div>
      <div style={{marginBottom:32}}><Badge variant="pill">{logs.length} entries this month</Badge></div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24}}>
        {logs.map((l, i) => <PracticeTrackerCard key={i} {...l} />)}
      </div>
    </div>
  );
}
window.PracticeScreen = PracticeScreen;
