searchState.loadedDescShard("cu29_clock", 0, "A trait to provide a clock to the runtime.\nFor Robot times, the underlying type is a u64 representing …\nA robot time is just a duration from a fixed point in time.\nRepresents a time range.\nA point-in-time wall-clock measurement.\nHomebrewed <code>Option&lt;CuDuration&gt;</code> to avoid using 128bits just …\nRepresents a time range with possible undefined start or …\nA running Robot clock. The clock is a monotonic clock that …\nA mock clock that can be controlled by the user.\nThe time of validity of a message can be more than one …\nPanics\nReturns <code>Some(t)</code> where <code>t</code> is the time <code>self + duration</code> if <code>t</code> …\nReturns the amount of time elapsed from another instant to …\nReturns <code>Some(t)</code> where <code>t</code> is the time <code>self - duration</code> if <code>t</code> …\nDecrements the time by the given amount. Be careful this …\nReturns the amount of time elapsed from another instant to …\nReturns the amount of time elapsed since this instant was …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nBuilds a monotonic clock starting at the given reference …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nBuild a fake clock with a reference time of 0. The …\nCreates a RobotClock using now as its reference time. It …\nGets the current time, scaled to reference time.\nA convenient way to get the current time from the mocking …\nGets the most recent current time, scaled to reference …\nReturns the amount of time elapsed from another instant to …\nSets the absolute value of the time.\nReturns the amount of time elapsed from another instant to …\nGets the current value of time.")