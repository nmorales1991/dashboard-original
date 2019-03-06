import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import { Bar, HorizontalBar, Line, Bubble, Doughnut, Pie, Polar, Radar } from 'react-chartjs-2';
import { Wrapper } from '../../components';
import { mockChart } from '../../utils/mock';

const Charts = () => (
  <Wrapper>
    <Grid container spacing={8}>
      { mockChart.map((chart, index) => (
        <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
          <Card>
            <CardHeader
              title={chart.title}
              subheader={chart.subtitle}
            />
            <CardContent>
              { chart.type === 'bar' &&
                <Bar
                  data={chart.data}
                  height={chart.height}
                  options={chart.options}
                />
              }
              { chart.type === 'horizontalbar' &&
                <HorizontalBar
                  data={chart.data}
                  height={chart.height}
                  options={chart.options}
                />
              }
              { chart.type === 'line' &&
                <Line
                  data={chart.data}
                  height={chart.height}
                  options={chart.options}
                />
              }
              { chart.type === 'bubble' &&
                <Bubble
                  data={chart.data}
                  height={chart.height}
                  options={chart.options}
                />
              }
              { chart.type === 'doughnut' &&
                <Doughnut
                  data={chart.data}
                  height={chart.height}
                  options={chart.options}
                />
              }
              { chart.type === 'pie' &&
                <Pie
                  data={chart.data}
                  height={chart.height}
                  options={chart.options}
                />
              }
              { chart.type === 'polar' &&
                <Polar
                  data={chart.data}
                  height={chart.height}
                  options={chart.options}
                />
              }
              { chart.type === 'radar' &&
                <Radar
                  data={chart.data}
                  height={chart.height}
                  options={chart.options}
                />
              }
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Wrapper>
);

export default Charts;