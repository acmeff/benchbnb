export const fetchBenches = (filters) => (
  $.ajax({
      url: 'api/benches',
      method: 'GET',
      data: { filters }
  })
);

export const addBench = ({bench}) => (
  $.ajax({
      url: 'api/benches',
      method: 'POST',
      data: { bench }
  })
);
