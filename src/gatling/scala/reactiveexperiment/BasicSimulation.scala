package reactiveexperiment

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration._

class BasicSimulation extends Simulation {

  val httpProtocol = http
    .baseUrl("https://titsonfire.store") // Here is the root for all relative URLs
    .acceptHeader("text/html,application/json,application/xml;q=0.9,*/*;q=0.8") // Here are the common headers
    .acceptEncodingHeader("gzip, deflate")
    .acceptLanguageHeader("en-US,en;q=0.5")
    .userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:16.0) Gecko/20100101 Firefox/16.0")

  val scn = scenario("Get report for customer") // A scenario is a chain of requests and pauses
    .exec(http("customer-id/101")
      .get("/test/v1/reports/by/customer-id/101"))
    .pause(7) // Note that Gatling has recorder real time pauses


  setUp(scn.inject(rampUsers(1358).during(1.second)).protocols(httpProtocol))
  //  val scn2 = scenario("Get customers reports")
  //    .exec(Reports.report)
  //
  //  setUp(scn2.inject(rampUsers(10000).during(60.seconds)).protocols(httpProtocol))
}
