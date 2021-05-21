export default function SkillLabel(props) {
  const { icon, label } = props
  return (
    <div style={{display:'inline-block', marginInline: 10}}>
      <div style={{ fontSize: 60 }}>{icon}</div>
      <div style={{ fontSize: 12, marginTop: -10 }}>{label}</div>
    </div>
  );
}