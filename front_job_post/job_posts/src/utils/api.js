let URL = 'http://localhost:8000'

export const getJobs = async () => {
  const response = await fetch(`${URL}/jobs/`);
  if (response.ok) {
    return await response.json();
  }
}

export const postJob = async data => {
  const response = await fetch(`${URL}/jobs/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  if (response.ok) {
    return await response.json();
  } else {
    return null;
  }
}

export const updateJob = async (id, data) => {
  const response = await fetch(`${URL}/jobs/${id}/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  if (response.ok) {
    return await response.json();
  } else {
    return null;
  }
}