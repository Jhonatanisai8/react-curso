# 1. construccion 
FROM maven:3.9.9-eclipse-temurin-21 AS build
WORKDIR /app
# 2. copiar el archivo pom.xml
COPY pom.xml .
RUN mvn dependency:go-offline
# 3. copiar el codigo fuente
COPY src ./src
RUN mvn clean package -DskipTests

#4. ejecucion 
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app

# 5. copiar el jar generado desde la etapa de contruccion
COPY --from=build /app/target/*.jar app.jar

# 6. exponer el puerto por defecto de spring boot 
EXPOSE 8080

# 7. ejecutar la aplicacion 
ENTRYPOINT [ "java" ,"-jar", "app.jar" ]




