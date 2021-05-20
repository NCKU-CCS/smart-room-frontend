import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from '@chakra-ui/core';
import UsageChart from './UsageChart';
import { useAxiosEffect } from '../../Hooks/AxiosEffect';
import { LOCATION } from '../../Constant/EnvConstants';
import rangeProp from '../../Constant/StatisticsConstants';
import AppSpinner from '../Common/Spinner';
import {
  getStartEndDate,
} from '../../Utils/Common';

function UsageGroup({ range }) {
  let [start, end] = getStartEndDate(range);
  const { interval } = rangeProp[range];
  const usageConfig = {
    method: 'get',
    url: '/meter_data',
    params: {
      location: LOCATION,
      start_time: start,
      end_time: end,
      interval,
    },
  };

  const usageResource = useAxiosEffect(usageConfig, [range]);

  const getCharts = () => {
    if (usageResource.data) {
      return (
        <div>
          <UsageChart
            room={602}
            name="power"
            usageData={usageResource.data}
            interval={interval}
          />
          <UsageChart
            room={608}
            name="power"
            usageData={usageResource.data}
            interval={interval}
          />
          <UsageChart
            room={'overview'}
            name="power"
            usageData={usageResource.data}
            interval={interval}
          />
        </div>
      );
    }
    if (usageResource.loading) {
      return (
        <Flex align="center" justify="center">
          <AppSpinner />
        </Flex>
      );
    }
    return <div>Error</div>;
  };
  return <>{getCharts()}</>;
}

UsageGroup.defaultProps = {
  range: rangeProp.Today.name,
};

UsageGroup.propTypes = {
  range: PropTypes.string,
};

export default UsageGroup;
