import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad, total, average, positive }) => {
  return (
    <>
      <h1>statistics</h1>
      {total === 0 ? (
        <h2>there are no votes</h2>
      ) : (
        <div>
          <table>
            <tbody>
              <tr>
                <td>
                  <StatisticLine text="good" value={good} />
                </td>
              </tr>

              <tr>
                <td>
                  <StatisticLine text="neutral" value={neutral} />
                </td>
              </tr>

              <tr>
                <td>
                  <StatisticLine text="bad" value={bad} />
                </td>
              </tr>
              <tr>
                <td>
                  <StatisticLine text="total" value={total} />{" "}
                </td>
              </tr>

              <tr>
                <td>
                  <StatisticLine text="average" value={average} />
                </td>
              </tr>

              <tr>
                <td>
                  <StatisticLine text="positive" value={positive} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Statistics;
