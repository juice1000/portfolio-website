let lines = [];

window.addEventListener('load', () => {
  const vibevote = document.getElementById('vibevote');
  const fluentai = document.getElementById('fluentai');
  const pitchify = document.getElementById('pitchify');
  const codeworks = document.getElementById('codeworks');
  const aiFashion = document.getElementById('ai-fashion');
  const listify = document.getElementById('listify');
  const expressGroup = document.getElementById('expressgroup');
  const uflo = document.getElementById('uflo');
  const research = document.getElementById('tu-research');
  const lineOptions = { color: 'white', size: 4, dash: { animation: true }, startSocket: 'top', endSocket: 'bottom' };

  const line = new LeaderLine(fluentai, vibevote, lineOptions);
  const line2 = new LeaderLine(pitchify, fluentai, lineOptions);
  const line3 = new LeaderLine(codeworks, pitchify, lineOptions);
  const line4 = new LeaderLine(codeworks, pitchify, lineOptions);
  const line5 = new LeaderLine(aiFashion, codeworks, lineOptions);
  const line6 = new LeaderLine(listify, aiFashion, lineOptions);
  const line7 = new LeaderLine(expressGroup, listify, lineOptions);
  const line8 = new LeaderLine(uflo, expressGroup, lineOptions);
  const line9 = new LeaderLine(research, uflo, lineOptions);

  lines.push(line, line2, line3, line4, line5, line6, line7, line8, line9);
});
