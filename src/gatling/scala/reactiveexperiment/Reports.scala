package reactiveexperiment
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

object Reports {

    val report = repeat(1000, "n") { // 1
        exec(
                http("Report ${n}")
                        .get("/test/v1/reports/by/customer-id/{n}")
        ) // 2
                .pause(7)
    }

}
