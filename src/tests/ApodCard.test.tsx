import React from 'react';
import { render } from '@testing-library/react';
import ApodCard from '../components/ApodCard';

test('renders ApodCard component', () => {
  const testData = {
    title: 'Test Title',
    date: '2024-06-30',
    explanation: 'Test explanation text.',
    url: 'https://example.com/image.jpg',
  };

  const { getByText, getByAltText } = render(
    <ApodCard
      title={testData.title}
      date={testData.date}
      explanation={testData.explanation}
      url={testData.url}
    />
  );

  const titleElement = getByText(testData.title);
  const dateElement = getByText(testData.date);
  const imageElement = getByAltText(testData.title);

  expect(titleElement).toBeInTheDocument();
  expect(dateElement).toBeInTheDocument();
  expect(imageElement).toBeInTheDocument();
});
