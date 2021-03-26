# 12-Factor App

The 12-Factor App defines a methodology for developing and deploying web applications, specifically software-as-a-service apps. Modern web applications are complex beasts. We need to provide for every step of the process: from virtualization, deployment, setting up the runtime and developer environments to managing databases and networking. All while keeping performance at a maximum.

The 12-Factor App methodology doesn't eliminate this complexity, but it will provide a solid framework for organizing our project in order to maintain a healthy and scalable application. These 12 principles each apply to a subset of our application and will guide us in finding the ideal way to manage our application as a whole.

### **Eight Rules Guiding the 12-factor App**

1. Performance: For 12-factor apps, we’re scaling out for a lot of copies of the code, meaning performance must be a priority.
2. Elasticity: Focus on scalable components that can grow and shrink as needed. Pryzby recommends Chaos Monkey as a tool of not only bad data but scaling up.
3. Resilience: We want to loosely couple our pieces. By each component doing only one thing, uptime increases.
4. Security: All data should be encrypted whenever possible, building security into design. If it’s a known fact that 80 percent of attacks are internal.
5. Decouple the data. We don’t want any of the data inside our app.
6. Keep communication to a minimum. If that component dies, we want to make sure we can still get the data. By using a backing store, it means we can pass around the data more easily, and it also means we’re passing less data around the system.
7. Think about how it will perform in scale. This whole system was created with scaling apps out to large communities in mind.
8. Security. Seriously. Thought about from the start.

### **The 12 Building Blocks of 12-Factor Apps**

* Factor 1: **Codebase**: One codebase tracked in revision control, many deploys

    Our codebase should be tracked in a central version control system that is easily accessible to all our developers. We prefer to use Git and share all our repositories through GitHub.

    There is only one codebase per app, but there will be many deploys of the app. This means that we might have deployed our application to production and to staging, for example. Both environments share the same codebase, but might be in a different state. Staging could have some commits not yet deployed to production for testing.


* Factor 2: **Dependencies**: Explicitly declare and isolate dependencies
    Our application might rely on external libraries and packages to run. We should never assume that these packages exist on the target system. Instead, our application must declare all dependencies and their correct version explicitly.

* Factor 3: **Configuration**: Store config in the environment

    Configuration options should never be hardcoded, for two reasons:

   1.  We do not want sensitive information like database credentials or API keys to be committed into the repository to prevent security leaks.
   2. Our configuration varies per environment. For example, we might want to enable debugging on our local environment while this would be overkill on production.

    Instead of hard-coding this information, we rely on environment variables to handle this sensitive information.

* Factor 4: **Backing Services**: Treat backing services as attached resources

    A backing service is one that requires a network connection to run, like MySQL or Memcached. If the location or connection details of such a service changes, we should not have to make code changes. Instead, these details should be available in the configuration.

    For example, our development environment talks to a MySQL server on our local machine. On production, our database runs on another server. The only difference will be the URL to connect to in the configuration.

* Factor 5: **Build, release, run**: Strictly separate build and run stages

    * Build, release, and run stages should be treated as completely distinct from one another:

    1. The build stage is fully controlled by the developer. This is where we tag a new release and fix bugs.
    2. The release stage prepares the build for execution in the target environment. In this stage, we can run tests to verify if the code behaves as intent.     
    3. The run stage executes the application and should not need any intervention.
   
    For example, it's now impossible to make changes to the runtime. Instead, we make changes to the code in the build stage where we have total control. This reduces risk and ensures our team that everything is running well.




* Factor 6: **Stateless Processes**: Execute the app as one or more stateless processes.

    Stateless applications are designed to degrade gracefully. That means if a part of our application stack fails, the app itself does not become a failure. In other words, the state of our system is completely defined by your databases and shared storage, and not by each individual running application instance.


* Factor 7: **Port Binding**: Export services via port binding

    Our application service should also be accessible via a URL, just as our backing services are. This enables our application to be fully self-contained.



* Factor 8: **Concurrency**: Scale out via the process model

    Every process inside our application should be treated as a first-class citizen. That means that each process should be able to scale, restart, or clone itself when needed. This approach will improve the sustainability and scalability of our application as a whole.


* Factor 9: **Disposability**: Maximize robustness with fast startup and graceful shutdown

    When we deploy new code, we want the new version to start right away and be able to deal with incoming traffic. This principle is a natural result of the backing services and concurrency principles: after a crash or new deployment, our app should have everything it needs waiting in databases or caches. Reloading the code should only take a few seconds max.


* Factor 10: **Dev/prod parity**: Keep development, staging, and production as similar as possible.

    Our development environment should resemble production as close as possible. That means working on the same operating system, using the same backing services and the same dependencies, and so on. This reduces the number of bugs and downtime and allows our organization to have a much more rapid development cycle.

* Factor 11: **Logs**: Treat logs as event streams
    Logging is important for debugging and checking up on the general health of our application. However, our application should not be concerned with the storage and management of these logs. Instead, log entries should be treated as an event stream that is routed to a separate service for archival and analysis.



* Factor 12: **Admin Processes**: Run admin/management tasks as one-off processes

    Once our application is running in production, we'll want to do a lot of simple administrative tasks from time to time. We could need to run a database migration or fetch analytical data to gather business insights.
